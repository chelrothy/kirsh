import axios from "axios";

import baseURL from "./baseURL";
import { getToken } from "./../token";

type Review = {
  content: string;
  score: number;
};

export const getStoreInfo = async (id: number) => {
  return await axios.get(`${baseURL}/${id}`, {
    headers: { "Content-Type": "application/json" }
  });
};

export const postStoreReview = async (id: number, review: Review) => {
  return await axios.post(
    `${baseURL}/${id}/review`,
    { content: review.content, score: parseInt(`${review.score}`) },
    {
      headers: { Authorization: `Bearer ${getToken()}` }
    }
  );
};

export const postProductReview = async (
  id: number,
  product: number,
  review: Review
) => {
  return await axios.post(
    `${baseURL}/${id}/review/${product}`,
    { content: review.content, score: parseInt(`${review.score}`) },
    {
      headers: { Authorization: `Bearer ${getToken()}` }
    }
  );
};
