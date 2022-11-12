import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    designation: 'admin',
    outlet: 'head',
  },
  {
    name: 'Production',
    email: 'production@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    designation: 'production',
    outlet: 'head',
  },
  {
    name: 'Store',
    email: 'store@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    designation: 'store',
    outlet: 'head',
  },
  {
    name: 'outlet',
    email: 'outlet@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    designation: 'outlet',
    outlet: 'gulshan',
  },
]

export default users
