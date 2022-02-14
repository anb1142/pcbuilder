import { User } from "firebase/auth";
import { createContext, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FirebaseContext } from "./FirebaseContextProvider";

export const UserContext = createContext<User | null | undefined>(undefined);

const UserContextProvider = (props: { children: any }) => {
	const { auth } = useContext(FirebaseContext);

	const [user] = useAuthState(auth);
	return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>;
};

export default UserContextProvider;
