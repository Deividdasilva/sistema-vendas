import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';
import './css/ListProductType.css';
import { deleteProductType, fetchProductTypes } from '../../services/productTypeService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListProductType = () => {
  const [productTypes, setProductTypes] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const productTypesPerPage = 5;
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productTypeToDelete, setProductTypeToDelete] = useState(null);
  const [filteredProductTypes, setFilteredProductTypes] = useState([]);

  useEffect(() => {
    fetchProductTypes()
      .then(response => {
        setProductTypes(response.data.data);
        setFilteredProductTypes(response.data.data);
      })
      .catch(error => console.error('Error fetching productTypes:', error));
  }, []); 

  useEffect(() => {
    const lowercasedValue = search.toLowerCase();
    const filtered = productTypes.filter(productType =>
      productType.description.toLowerCase().includes(lowercasedValue)
    );
    setFilteredProductTypes(filtered);
    setCurrentPage(0);
  }, [search, productTypes]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleDeleteProductType = (productType) => {
    setProductTypeToDelete(productType);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setProductTypeToDelete(null);
  };

  const confirmDelete = () => {
    if (productTypeToDelete) {
      deleteProductType(productTypeToDelete.id)
        .then(() => {
          const updatedProductTypes = productTypes.filter(p => p.id !== productTypeToDelete.id);
          setProductTypes(updatedProductTypes);
          setFilteredProductTypes(updatedProductTypes);
          closeDeleteModal();
          toast.success("Tipo de Produto deletado com sucesso");
        })
        .catch(error => console.error('Failed to delete productType:', error));
    }
  };

  const pageCount = Math.ceil(filteredProductTypes.length / productTypesPerPage);
  const currentItems = filteredProductTypes.slice(
    currentPage * productTypesPerPage,
    (currentPage + 1) * productTypesPerPage
  );

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center align-items-center mb-3">
        <h2>Tipos de Produto</h2>
      </div>
      <div className="input-group mb-3">
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar Tipo"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Descrição</th>
              <th scope="col">Impostos</th>
              <th scope="col">Data Criação</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(productType => (
              <tr key={productType.id}>
                <td>{productType.id}</td>
                <td>{productType.description}</td>
                <td>{productType.tax}%</td>
                <td>{new Date(productType.created_at).toLocaleDateString()}</td>
                <td>
                  <Link to={`/product-types/${productType.id}/edit`} className="btn btn-primary mr-2">
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteProductType(productType)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredProductTypes.length === 0 && (
        <div className="alert text-center">Nenhum tipo de produto cadastrado.</div>
      )}
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
      />
      {showDeleteModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <center>
              <h5>Confirmação de Exclusão</h5>
            </center>
            <center>
              <p>Deseja Excluir o tipo produto: {productTypeToDelete.description}?</p>
            </center>
            <button className="btn btn-danger" onClick={confirmDelete}>
              Deletar
            </button>
            <button id='btn-close' className="btn btn-secondary" onClick={closeDeleteModal}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListProductType;
