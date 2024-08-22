import axios from "axios";


export const api = axios.create({
    baseURL: "https://dstbackend-2.onrender.com/",
});

export const getAllAbout = async () => {
    try {
      const res = await api.get("/api/v1/getallcontent?key=about", {
        timeout: 10 * 7000,
      });
      if (Response.status === 400 || res.status === 500) throw res.data;
      console.log(res.data?.data)
      return res.data?.data;
    } catch (error) {
      throw error;
    }
  };

export const getAllTeam= async () =>{
     try {
         const res = await api.get("/api/v1/getallcontent?key=team",{
             timeout:10 * 7000,
         })
         if (res.status === 400 || res.status === 500) throw res.data;
         return res.data?.data;
     }catch (error){
         throw error
     }
}

  export const getAllHome = async () => {
    try {
      const res = await api.get("/api/v1/getallcontent?key=home", {
        timeout: 10 * 7000,
      });
      if (Response.status === 400 || res.status === 500) throw res.data;
      console.log(res.data?.data)
      return res.data?.data;
    } catch (error) {
      throw error;
    }
  };

  export const getAllClients = async () => {
    try {
      const res = await api.get("/api/v1/getallcontent?key=clients", {
        timeout: 10 * 7000,
      });
      if (Response.status === 400 || res.status === 500) throw res.data;
      console.log(res.data?.data)
      return res.data?.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getAllCareers = async () => {
    try {
      const res = await api.get("/api/v1/getallcontent?key=careers", {
        timeout: 10 * 7000,
      });
      if (Response.status === 400 || res.status === 500) throw res.data;
      console.log(res.data?.data)
      return res.data?.data;
    } catch (error) {
      throw error;
    }
  };

  export const getAllService = async () => {
    try {
      const res = await api.get("/api/v1/getallcontent?key=services", {
        timeout: 10 * 7000,
      });
      if (Response.status === 400 || res.status === 500) throw res.data;
      console.log(res.data?.data)
      return res.data?.data;
    } catch (error) {
      throw error;
    }
  };


  export const getAllQuotes= async () => {
    try {
      const res = await api.get("/api/v1/getallcontent?key=quotes", {
        timeout: 10 * 7000,
      });
      if (Response.status === 400 || res.status === 500) throw res.data;
      console.log(res.data?.data)
      return res.data?.data;
    } catch (error) {
      throw error;
    }
  };

  export const getsupport = async () => {
    try {
      const res = await api.get("/api/v1/getallcontent?key=supportmodel", {
        timeout: 10 * 7000,
      });
      if (Response.status === 400 || res.status === 500) throw res.data;
      console.log(res.data?.data)
      return res.data?.data;
    } catch (error) {
      throw error;
    }
  };

  export const getAllHybridmodel = async () => {
    try {
      const res = await api.get("/api/v1/getallcontent?key=hybrid", {
        timeout: 10 * 7000,
      });
      if (Response.status === 400 || res.status === 500) throw res.data;
      console.log(res.data?.data)
      return res.data?.data;
    } catch (error) {
      throw error;
    }
  };

  export const getAllHiring = async ()=>{
    try{
      const res = await api.get("/api/v1/getallcontent?key=hiringmodel", {
        timeout: 10 * 7000,
      });
      if (Response.status === 400 || res.status === 500) throw res.data;
      console.log(res.data?.data)
      return res.data?.data;
    }catch(error){
      throw error;
    }
  }

  export const getAllProject = async ()=>{
    try{
      const res = await api.get("/api/v1/getallcontent?key=projecthiringmodel", {
        timeout: 10 * 7000,
      });
      if (Response.status === 400 || res.status === 500) throw res.data;
      console.log(res.data?.data)
      return res.data?.data;
    }catch(error){
      throw error;
    }
  }

  export const getHourModel = async () => {
    try {
      const res = await api.get("/api/v1/getallcontent?key=hourmodel", {
        timeout: 10 * 7000,
      });
      if (Response.status === 400 || res.status === 500) throw res.data;
      console.log(res.data?.data)
      return res.data?.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getTaskModel = async () => {
    try {
      const res = await api.get("/api/v1/getallcontent?key=taskmodel", {
        timeout: 10 * 7000,
      });
      if (Response.status === 400 || res.status === 500) throw res.data;
      console.log(res.data?.data)
      return res.data?.data;
    } catch (error) {
      throw error;
    }
  };

  export const getAllContact = async ()=>{
    try{
      const res = await api.get("/api/v1/getallcontent?key=contact", {
        timeout: 10 * 7000,
      });
      if (Response.status === 400 || res.status === 500) throw res.data;
      console.log(res.data?.data)
      return res.data?.data;
    }catch(error){
      throw error;
    }
  }