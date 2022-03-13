import axios from "axios";

const fetchApiData = async () => {
  const url =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  try {
    const apiData = await axios.get(url);
    const data = apiData.data;
    if (data) {
      return { success: true, data };
    }
    return { success: false, data: {}, message: "No Employees Found" };
  } catch (e) {
    return {
      success: false,
      data: {},
      message: e.message || "Something went wrong!",
    };
  }
};

export default fetchApiData;
