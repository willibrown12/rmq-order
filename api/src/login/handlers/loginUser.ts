// import { loginType } from "..";
// import { getConnection } from "../../database/connection"
// import bcrypt from 'bcryptjs';
// import { userType } from "../../register";




// type loginRoleType = { authentication: boolean, role?: string, full_name?: string, idUser?: number }

// export async function loginUser(user: loginType): Promise<loginRoleType> {

//     const connection = await getConnection();
//     const query = `SELECT 
//     *                
// FROM 
//     rabbitOrder.package
// JOIN 
//     rabbitOrder.customers
// ON 
//     rabbitOrder.package.customer_Id = rabbitOrder.customers.id
// WHERE 
//     rabbitOrder.customers.phone_number = ? 
//     AND rabbitOrder.package.status = ?`
//     const foundUser = await connection?.execute(query, [user.email.toLowerCase()])
//     // @ts-ignore

//     const result: Array<userType> = foundUser[0]
//     if (result.length === 0) return { authentication: false, };

//     const storedHashedPassword = result[0].password;
//     const isPasswordValid = await bcrypt.compare(user.password, storedHashedPassword);
//     const fullName = result[0].first_name + " " + result[0].last_name;
//     return { authentication: isPasswordValid, role: result[0].role, full_name: fullName, idUser: result[0].id };
// }



// const emailPasswordMap = {
//     "willi@gmail.com": "Vilibrown12!",
//     "michael.smith@example.com": "BlueSky22@",
//     "sarah.davis@example.com": "Coffee123!",
//     "daniel.lee@example.com": "Moonlight55$",
//     "olivia.brown@example.com": "StarryNight7#",
//     "emily.johnson@example.com": "Sunset2024%"
// };

