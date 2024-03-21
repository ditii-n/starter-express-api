import { ApiErrors } from "../utils/ApiErrors.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

import { Data } from "../model/data.model.js";

const postData = asyncHandler(async (req, res) => {
  let { username, language, stdin, code } = req.body;
  const insertData = await Data.create({
    username,
    language,
    stdin,
    code,
  });
  // console.log(insertData);
  if (!insertData) {
    throw new ApiErrors(500, "Something went wrong while inserting");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, insertData, "Data inserted Successfully"));
  // http://localhost:8000/api/v1/users/save
});

const getData = asyncHandler(async (req, res) => {
  const fetchData = await Data.find();
  if (fetchData.length === 0) {
    throw new ApiErrors(500, "No Data Present in List");
  }
  if (!fetchData) {
    throw new ApiErrors(500, "Something went wrong while getting Data");
  }
  console.log(fetchData);

  return res
    .status(201)
    .json(new ApiResponse(200, fetchData, "Data fetched Successfully"));
});

export { postData, getData };
