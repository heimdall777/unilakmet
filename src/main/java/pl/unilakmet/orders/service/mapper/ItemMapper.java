package pl.unilakmet.orders.service.mapper;

import org.mapstruct.*;
import pl.unilakmet.orders.domain.Item;
import pl.unilakmet.orders.domain.Material;
import pl.unilakmet.orders.domain.Order;
import pl.unilakmet.orders.service.dto.ItemDTO;
import pl.unilakmet.orders.service.dto.MaterialDTO;
import pl.unilakmet.orders.service.dto.OrderDTO;

/**
 * Mapper for the entity {@link Item} and its DTO {@link ItemDTO}.
 */
@Mapper(componentModel = "spring")
public interface ItemMapper extends EntityMapper<ItemDTO, Item> {
    @Mapping(target = "order", source = "order", qualifiedByName = "orderId")
    @Mapping(target = "material", source = "material", qualifiedByName = "materialId")
    ItemDTO toDto(Item s);

    @Named("orderId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    OrderDTO toDtoOrderId(Order order);

    @Named("materialId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    MaterialDTO toDtoMaterialId(Material material);
}
