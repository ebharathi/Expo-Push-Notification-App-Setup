import { UserProps } from "@/utils/types"

export const userMockData: UserProps = {
    id: "1",
    personalDetails: {
        name: "John",
        age: 11,
        email: "John@gmail.com",
        phone: 111111111111
    },
    address: {
        street: "11,ABC Street,XYZ",
        city: "Qwerty",
        pinCode: 11111
    }
}