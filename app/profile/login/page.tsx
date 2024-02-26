import { getServerSession } from "next-auth";
import { authOptions } from "@app/utils/auth";
import { redirect } from "next/navigation";
import SignInForm from "@components/SignInForm";

const page = async () => {
 
  const session = await getServerSession(authOptions);

  if (session) {
   return redirect("/");
  }

  return (
    <section className="bg-purple-700 flex justify-center h-screen">
      <div className="container-custom bg-gray-900 flex justify-center items-center">
        <SignInForm />
      </div>
    </section>
  );
};

export default page;
