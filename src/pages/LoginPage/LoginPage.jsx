import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function LoginPage({addUser}) {
    return (
        <main>
            <h1>Log in Page</h1>
            <SignUpForm addUser={addUser}/>
        </main>
    );
}