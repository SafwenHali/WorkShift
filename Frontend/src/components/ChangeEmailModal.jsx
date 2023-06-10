const token = localStorage.getItem("at");
const [id] = useState(jwt_decode(token).id || "");
const { data } = useFetchUser(id);

const [post, setPost] = useState({});

const handleInput = (event) => {
  setPost({ ...post, [event.target.name]: event.target.value });
};

const handleSubmit = (event) => {
  event.preventDefault();
  axios
    .put("http://127.0.0.1:7000/api/users/"+id, post)
    .then((response) => {
      console.log(response);
      if (response.status === 201) {
        toast.success("User created.");
        alert("account modfied sucessfully");
        }
    })
    .catch((err) => console.log(err));
  //window.location.href = "/Admin/Articles";
};