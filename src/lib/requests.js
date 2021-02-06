import Axios from "axios";
import { contact } from "../profile";
import { getHeaders } from "./headers";

export const sendMessage = async (data) => {
  return await Axios.post(contact.contactUrl, data, {
    headers: getHeaders(),
  })
    .then((response) => {
      if (response?.data) {
        return {
          status: true,
          message: "Mensaje enviado correctamente a diego2000avelar@gmail.com",
        };
      } else {
        return {
          message: "No se pudo enviar el mensaje",
          status: false,
        };
      }
    })
    .catch(() => {
        return {
            message: "No se pudo enviar el mensaje",
            status: false,
          };
    });
};
