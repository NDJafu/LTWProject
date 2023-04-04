import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";

const Products = () => {
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({
    name: "",
    price: "",
    sizes: "",
  });

  const loadData = () => {
    axios.get("/api/v1/products").then(({ data }) => {
      setData(data);
      console.log(data);
    });
  };

  const resetForm = () => {
    setForm({
      name: "",
      price: "",
      sizes: "",
    });
  };

  const handleCreate = () => {
    axios
      .post("/api/v1/products", {
        name: form.name,
        price: form.price,
        sizes: form.sizes.split("/"),
      })
      .then(({ data }) => {
        loadData();
        console.log(data);
      })
      .catch(({ response }) => {
        alert(response.data.msg);
      });
  };

  const handleUpdate = (id) => {
    axios
      .patch("/api/v1/products/" + id, {
        name: form.name,
        price: form.price,
        sizes: form.sizes.split("/"),
      })
      .then(() => {
        loadData();
      });
  };

  const handleDelete = (id) => {
    axios.delete("/api/v1/products/" + id).then(() => {
      loadData();
    });
  };

  useEffect(() => {
    if (selected) {
      setForm({
        name: selected.name,
        price: selected.price,
        sizes: selected.sizes.join("/"),
      });
    } else {
      resetForm();
    }
  }, [selected]);
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="font-bold text-3xl">Showing all products</h1>
      <div className="py-8 flex gap-2">
        <table className="border border-black border-collapse w-1/2">
          <tr className="sticky top-0 bg-gray-300 border border-black">
            <th className="border border-black">Name</th>
            <th className="border border-black">Price</th>
            <th className="border border-black">Sizes</th>
            <th className="border border-black">Action</th>
          </tr>
          {data &&
            data.map((item, index) => (
              <tr
                key={item._id}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
              >
                <td className="border border-black px-2">{item.name}</td>
                <td className="border border-black px-2">${item.price}</td>
                <td className="border border-black px-2">
                  {item.sizes.join("/")}
                </td>
                <td className="border border-black py-1">
                  <div className="flex gap-4 justify-center">
                    <button onClick={() => setSelected(item)}>
                      <FaPen />
                    </button>
                    <button onClick={() => handleDelete(item._id)}>
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </table>
        <div className="border border-black p-2 fixed right-20">
          <form className="grid grid-cols-2 gap-3">
            <label className="flex gap-1">
              <b>Name:</b>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border border-black px-1 rounded-sm"
              ></input>
            </label>
            <label className="flex gap-1">
              <b>Price:</b>
              <input
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="border border-black px-1 rounded-sm"
              ></input>
            </label>
            <label className="flex gap-3">
              <b>Sizes:</b>
              <input
                type="text"
                value={form.sizes}
                onChange={(e) => setForm({ ...form, sizes: e.target.value })}
                className="border border-black px-1 rounded-sm"
              ></input>
            </label>
          </form>
          <div className="flex gap-2 py-2">
            {selected ? (
              <button
                className="bg-slate-600 text-white w-1/4 rounded-md col-span-2"
                onClick={() => handleUpdate(selected._id)}
              >
                Update
              </button>
            ) : (
              <button
                className="bg-slate-600 text-white w-1/4 rounded-md col-span-2"
                onClick={() => {
                  handleCreate();
                }}
              >
                Create
              </button>
            )}
            <button
              className="bg-slate-600 text-white w-1/4 rounded-md p-1"
              onClick={() => {
                setSelected(null);
                resetForm();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
