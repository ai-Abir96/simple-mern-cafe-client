import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../utils/hooks/useAxiosSecure";

const AllUsers = () => {
  const { axiosSecure } = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(
    ["users"],
    async () => {
      const res = await axiosSecure.get("/getusers");
      console.log(res);
      const result = res.data;
      return result;
    }
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.result.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };
  const handleRole = (id) => {
    Swal.fire({
      title: "Are you sure? You want to make this User Admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/admin/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.result.modifiedCount > 0) {
              refetch();
              Swal.fire({
                icon: "success",
                title: "User is admin now",
                timer: 1500,
              });
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto overflow-y-auto w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.userData?.map((ud) => (
            <tr key={ud._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>

              <td>
                <div className="font-bold">{ud.name}</div>
              </td>
              <td>
                <div className="font-bold">{ud.email}</div>
              </td>
              <td>
                <div className="font-bold">
                  {ud.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleRole(ud._id)}
                      className="btn btn-warning btn-square "
                    >
                      <FontAwesomeIcon icon={faUserShield} />
                    </button>
                  )}
                </div>
              </td>

              <th>
                <button
                  onClick={() => handleDelete(ud._id)}
                  className="btn btn-error btn-square "
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
