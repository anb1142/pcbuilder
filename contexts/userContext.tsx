import { auth } from "@data/firebase";
import { User } from "firebase/auth";
import { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export const UserContext = createContext<User | null | undefined>(undefined);

const UserContextProvider = (props: { children: any }) => {
	const [user] = useAuthState(auth);
	return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>;
};

export default UserContextProvider;
