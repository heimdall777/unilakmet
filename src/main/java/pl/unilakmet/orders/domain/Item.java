package pl.unilakmet.orders.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.*;
import pl.unilakmet.orders.domain.enumeration.ItemStatus;

/**
 * A Item.
 */
@Entity
@Table(name = "item")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Item implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "quantity", nullable = false)
    private Double quantity;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private ItemStatus status;

    @OneToMany(mappedBy = "item")
    @JsonIgnoreProperties(value = { "item" }, allowSetters = true)
    private Set<Material> materials = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties(value = { "items" }, allowSetters = true)
    private Order order;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Item id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getQuantity() {
        return this.quantity;
    }

    public Item quantity(Double quantity) {
        this.setQuantity(quantity);
        return this;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public ItemStatus getStatus() {
        return this.status;
    }

    public Item status(ItemStatus status) {
        this.setStatus(status);
        return this;
    }

    public void setStatus(ItemStatus status) {
        this.status = status;
    }

    public Set<Material> getMaterials() {
        return this.materials;
    }

    public void setMaterials(Set<Material> materials) {
        if (this.materials != null) {
            this.materials.forEach(i -> i.setItem(null));
        }
        if (materials != null) {
            materials.forEach(i -> i.setItem(this));
        }
        this.materials = materials;
    }

    public Item materials(Set<Material> materials) {
        this.setMaterials(materials);
        return this;
    }

    public Item addMaterial(Material material) {
        this.materials.add(material);
        material.setItem(this);
        return this;
    }

    public Item removeMaterial(Material material) {
        this.materials.remove(material);
        material.setItem(null);
        return this;
    }

    public Order getOrder() {
        return this.order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Item order(Order order) {
        this.setOrder(order);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Item)) {
            return false;
        }
        return id != null && id.equals(((Item) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Item{" +
            "id=" + getId() +
            ", quantity=" + getQuantity() +
            ", status='" + getStatus() + "'" +
            "}";
    }
}
