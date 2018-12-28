package utils;


public class PetException extends Exception {
	private static final long serialVersionUID = 0L;

	public PetException(String message) {
		super(message);
	}

	public PetException(String message, Throwable cause) {
		super(message, cause);
		cause.getStackTrace();
	}

	public PetException(Throwable cause) {
		super(cause);
		cause.getStackTrace();
	}

	public PetException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		cause.getStackTrace();
	}

//	public cucumberException(String message, Throwable stackTraceElements, boolean b, boolean c) {
//		super(message );
//	
//	}
}
