package pl.unilakmet.orders.service.mapper;

import org.mapstruct.*;
import pl.unilakmet.orders.domain.Material;
import pl.unilakmet.orders.service.dto.MaterialDTO;

/**
 * Mapper for the entity {@link Material} and its DTO {@link MaterialDTO}.
 */
@Mapper(componentModel = "spring")
public interface MaterialMapper extends EntityMapper<MaterialDTO, Material> {}
