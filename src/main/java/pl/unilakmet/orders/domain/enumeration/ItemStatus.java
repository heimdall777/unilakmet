package pl.unilakmet.orders.domain.enumeration;

/**
 * The ItemStatus enumeration.
 */
public enum ItemStatus {
    MISSING("Brakuje"),
    ORDERED("Zamówione"),
    IN_STOCK("W magazynie");

    private final String value;

    ItemStatus(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
