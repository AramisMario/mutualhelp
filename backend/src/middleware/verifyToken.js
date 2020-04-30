import jwt from "jsonwebtoken";
export default function verifyToken(req,res,netx){
    const token = req.headers["authorization"].split(" ")[1];
    
    if(!token){
        return res.status(401).json({
            auth:false,
            message:'no token provided'
        });
    }
    const decoded = jwt.verify(token,process.env.JWTKEY);
    req.userId = decoded.id;
    netx();
}