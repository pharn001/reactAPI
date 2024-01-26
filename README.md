 ການສັ່ງສະແດງຮູບໂດຍໃສ່ API
function App() {
  const [data,setData] =useState("")
  const fetchAPI = async ()=>{
    const reponse = await axios.get("https://randomfox.ca/floof/");
    setData(reponse.data);
  }
  useEffect(() => {
    fetchAPI();
  },[]);
  // const [data,setData] =useState("")
  // const fetchAPI = async ()=>{
  //   const reponse = await axios.get("https://jsonplaceholder.tyco");
  //   setData(reponse.data);
  // }
  // useEffect(() => {
  //   fetchAPI();
  // },[]);
  
  return (
    <>
     <img width={300} src={data.image}/>
    </>
  )
}
9999999999999999999999999999999999999999999999999999999999999999