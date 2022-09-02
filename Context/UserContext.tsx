import { createContext, useContext, useReducer } from "react";

type UserProviderProps = { children: React.ReactNode };
type State = {
	access_token: string | undefined;
	id_token: string | undefined;
	id: string | undefined;
};
type Action = {
	type: "login" | "logout";
	state?: State;
};
type Dispatch = (action: Action) => void;

interface UserContextInterface {
	state: State;
	dispatch: Dispatch;
	get_access_token: () => string | undefined;
}

const UserContext = createContext<UserContextInterface | undefined>(undefined);

function UserReducer(state: State, action: Action) {
	switch (action.type) {
		case "login": {
			return {
				access_token: action.state?.access_token,
				id_token: action.state?.id_token,
				id: action.state?.id,
			};
		}
		case "logout": {
			return { access_token: undefined, id_token: undefined, id: undefined };
		}
		default: {
			throw new Error(`Unhandled action: ${action}`);
		}
	}
}

function UserProvider({ children }: UserProviderProps) {
	const [state, dispatch] = useReducer(UserReducer, {
		access_token: undefined,
		id_token: undefined,
		id: undefined,
	});

	const get_access_token = () => {
		return state.access_token;
	};

	const value = { state, dispatch, get_access_token };
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUser() {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
}

export { UserProvider, useUser };
