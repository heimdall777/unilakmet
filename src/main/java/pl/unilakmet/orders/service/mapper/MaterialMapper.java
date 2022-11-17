package pl.unilakmet.orders.service.mapper;

import org.mapstruct.*;
import pl.unilakmet.orders.domain.Item;
import pl.unilakmet.orders.domain.Material;
import pl.unilakmet.orders.service.dto.ItemDTO;
import pl.unilakmet.orders.service.dto.MaterialDTO;

/**
 * Mapper for the entity {@link Material} and its DTO {@link MaterialDTO}.
 */
@Mapper(componentModel = "spring")
public interface MaterialMapper extends EntityMapper<MaterialDTO, Material> {
    @Mapping(target = "item", source = "item", qualifiedByName = "itemId")
    MaterialDTO toDto(Material s);

    @Named("itemId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ItemDTO toDtoItemId(Item item);
}
