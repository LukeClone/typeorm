export class QueryBuilderUtils {

    /**
     * Checks if given value is a string representation of alias property,
     * e.g. "post.category" or "post.id".
     */
    static isAliasProperty(str: any): str is string {

        // alias property must be a string and must have a dot separator
        if (typeof str !== "string" || str.indexOf(".") === -1)
            return false;

        // extra alias and its property relation
        const [aliasName, propertyName] = str.split("."); // todo: what about relations in embedded?
        if (!aliasName || !propertyName)
            return false;

        // alias and property must be represented in a special format
        const aliasNameRegexp = /^[a-zA-Z0-9_-]+$/;
        if (!aliasNameRegexp.test(aliasName) || !aliasNameRegexp.test(propertyName))
            return false;

        return true;
    }

}
