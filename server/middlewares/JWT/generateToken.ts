import jwt, { JwtPayload, Secret, VerifyErrors } from "jsonwebtoken";

export interface PayLoad extends JwtPayload {
  _id: string;
  email: string;
}

export const secret: string = "isaacisveryannoying";

export const genToken = (user: PayLoad) => {
  jwt.sign(user, secret as Secret, { expiresIn: "1h" });
};
