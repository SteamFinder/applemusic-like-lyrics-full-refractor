import { useSetAtom } from "jotai";
import { type FC, useEffect } from "react";
import { checkUpdateAtom } from "../../states/updater";

export const UpdateContext: FC = () => {
	const checkUpdate = useSetAtom(checkUpdateAtom);

	useEffect(() => {
		checkUpdate();
	}, [checkUpdate]);

	return null;
};
