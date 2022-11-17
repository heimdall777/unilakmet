package pl.unilakmet.orders.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class MaterialMapperTest {

    private MaterialMapper materialMapper;

    @BeforeEach
    public void setUp() {
        materialMapper = new MaterialMapperImpl();
    }
}
