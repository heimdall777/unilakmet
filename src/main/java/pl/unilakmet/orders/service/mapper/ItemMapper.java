package pl.unilakmet.orders.service.mapper;

import org.mapstruct.*;
import pl.unilakmet.orders.domain.Item;
import pl.unilakmet.orders.domain.Order;
import pl.unilakmet.orders.service.dto.ItemDTO;
import pl.unilakmet.orders.service.dto.OrderDTO;

/**
 * Mapper for the entity {@link Item} and its DTO {@link ItemDTO}.
 */
@Mapper(componentModel = "spring")
public interface ItemMapper extends EntityMapper<ItemDTO, Item> {
    @Mapping(target = "order", source = "order", qualifiedByName = "orderId")
    ItemDTO toDto(Item s);

    @Named("orderId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "name", source = "name")
    OrderDTO toDtoOrderId(Order order);
}
