import React from 'react';
import { toast } from 'react-toastify';

function DeleteConfirmModal({
  refetch,
  confirmDelteModal,
  setConfirmDelteModal,
}) {
  const { email, name } = confirmDelteModal;
  console.log(confirmDelteModal);

  const handleDelete = () => {
    // console.log(email);
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.deletedCount) {
          toast.success(`${name} is removed from doctors portal`);
          setConfirmDelteModal(null);
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-black">
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-700">
            Are you sure want to remove {name} from DOCTORS PORTAL?
          </h3>
          <div className="modal-action">
            <button
              className="btn btn-error text-white font-bold"
              onClick={handleDelete}
            >
              Yes
            </button>
            <label htmlFor="delete-modal" className="btn">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;
