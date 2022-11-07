package pl.unilakmet.orders.domain.enumeration;

/**
 * The OrderStatus enumeration.
 */
public enum OrderStatus {
    NEW("Nowe"),
    IN_PROGRESS("W trakcie"),
    FINISH("Zakończone");

    private final String value;

    OrderStatus(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
