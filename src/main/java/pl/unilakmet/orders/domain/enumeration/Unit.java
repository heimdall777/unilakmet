package pl.unilakmet.orders.domain.enumeration;

/**
 * The Unit enumeration.
 */
public enum Unit {
    KG("kg"),
    M("m"),
    CM("cm"),
    PIECE("szt");

    private final String value;

    Unit(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
