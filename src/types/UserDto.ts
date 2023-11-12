import AddressDto from "./AddressDto";
import CompanyDto from "./CompanyDto";

interface UserDto {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: AddressDto;
  company: CompanyDto;
}

export default UserDto;
