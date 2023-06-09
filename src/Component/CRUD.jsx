import React, { useRef } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
const CRUD = () => {
  const PhoneNumberRef = useRef();
  const AddressRef = useRef();
  const formHandler = async () => {};
  return (
    <div>
      <Card className="absolute backdrop-blur p-6" color="transparent">
        <Typography variant="h4" color="white">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details.
        </Typography>
        <form
          onSubmit={formHandler}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-4">
            <Input
              ref={PhoneNumberRef}
              className="text-white"
              size="lg"
              label="Email"
            />
            <Input
              ref={AddressRef}
              className="text-white"
              type="password"
              size="lg"
              label="Password"
            />
          </div>
          {load ? (
            <Button type="submit" className="mt-6" fullWidth>
              Login
            </Button>
          ) : (
            <Button className="mt-6 disabled text-center" fullWidth>
              <Loader
                color="red"
                className="text-center mx-auto block"
                variant="dots"
              />
            </Button>
          )}

          <Typography color="white" className="mt-4 text-center font-normal">
            Create an account?
            <NavLink
              to="/signup"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Update
            </NavLink>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default CRUD;
