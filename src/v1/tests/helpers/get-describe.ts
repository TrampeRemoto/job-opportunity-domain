import { stringUtil } from "v1/utils/string";

const getApiVersion = (pathSpliced: Array<string>) => {
	const srcIndex = pathSpliced.findIndex(val => val === "src");

	return pathSpliced[srcIndex + 1];
};

const getServiceName = (pathSpliced: Array<string>) => {
	const testsIndex = pathSpliced.findIndex(val => val === "tests");

	const serviceName = pathSpliced[testsIndex + 2]; // WARNING: +2 !!!

	const serviceNamePascal = stringUtil.kebabToCamel(serviceName);

	return `${serviceNamePascal}Service`;
};

const getFunctionName = (pathSpliced: Array<string>) => {
	const testsIndex = pathSpliced.findIndex(val => val === "tests");

	const serviceIndex = testsIndex + 3; // WARNING: +3 !!!

	const functionPathWithOutFileName = pathSpliced.slice(
		serviceIndex,
		pathSpliced.length - 1,
	);

	const fileName = pathSpliced.pop()?.split(".").shift() || "";

	if (fileName.startsWith("index")) {
		return functionPathWithOutFileName.join(" > ");
	}

	const fileNameWithOutExtension = fileName.split(".").shift();

	return [...functionPathWithOutFileName, fileNameWithOutExtension].join(" > ");
};

export const getDescribe = (path: string) => {
	const pathSpliced = path.split("/");

	const apiVersion = getApiVersion(pathSpliced);

	const serviceName = getServiceName(pathSpliced);

	const functionName = getFunctionName(pathSpliced);

	return `${apiVersion} > ${serviceName} > ${functionName}`;
};
