import GeoDto from "./GeoDto";

interface AddressDto {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoDto;
}

export default AddressDto;
