package pl.unilakmet.orders.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.unilakmet.orders.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
