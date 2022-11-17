package pl.unilakmet.orders.service.dto;

import java.io.Serializable;
import java.util.Objects;
import javax.validation.constraints.*;
import pl.unilakmet.orders.domain.enumeration.Unit;

/**
 * A DTO for the {@link pl.unilakmet.orders.domain.Material} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class MaterialDTO implements Serializable {

    private Long id;

    @NotNull
    private String name;

    @NotNull
    private Unit unit;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Unit getUnit() {
        return unit;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof MaterialDTO)) {
            return false;
        }

        MaterialDTO materialDTO = (MaterialDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, materialDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "MaterialDTO{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", unit='" + getUnit() + "'" +
            "}";
    }
}
