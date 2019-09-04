class Validation{
	isValid(email){
		
		// Cannot contain special characters
		var lst = [",", ";", "!", "#". "$", "%", "^", "&","*". "(", ")"];
		for (let c of lst) {
			if (email.indexOf(c) !== -1) {
				return false;
			}
		}
		
		// Must contain @ symbol
		if (email.indexOf('@') === -1) {
				return false;
		}
		
		// Must end in .com
		if (email.substr(email.length - 4, email.length) !== '.com') {
				return false;
		}
		
		// First letter must be a character
		if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(email[0]) !== -1) {
			return false;
		}
		
		return true;
	}
}

module.exports = Validation;