package pl.unilakmet.orders.service.mapper;

import org.mapstruct.*;
import pl.unilakmet.orders.domain.Order;
import pl.unilakmet.orders.service.dto.OrderDTO;

/**
 * Mapper for the entity {@link Order} and its DTO {@link OrderDTO}.
 */
@Mapper(componentModel = "spring")
public interface OrderMapper extends EntityMapper<OrderDTO, Order> {}
