import { UserModel } from "./models/user";

function main(): void {
    const user = new UserModel("A", "Sample Address", 9999999999, "A@A.com");

    console.log(user.getName() + " " + user.getEmail() + " " + user.getPhoneNumber() + " " + user.getAddress());
}

main();