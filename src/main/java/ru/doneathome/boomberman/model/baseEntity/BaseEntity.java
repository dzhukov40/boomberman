package ru.doneathome.boomberman.model.baseEntity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

/**
 * простановка гуида .setGuid(UUID.randomUUID().toString())
 */
@MappedSuperclass
public abstract class BaseEntity implements Entity {

    public static final String P_ID = "id";
    public static final String P_LAST_EDITING_DATE = "last_editing_date";

    @Id
    @Column(name = P_ID, nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    protected Long id;

    @Column(name = P_LAST_EDITING_DATE, nullable = false)
    protected Date lastEditingDate;

    @PrePersist
    @PreUpdate
    final void updateLastEditingDate() {
        setLastEditingDate(new Date());
    }

    @Override
    public int hashCode() {
        return getId() != null ? getId().hashCode() : 0;
    }

    @Override
    public boolean equals(Object object) {
        if (this == object)
            return true;
        if (!(object instanceof BaseEntity)) {
            return false;
        }
        return (getId() != null && ((BaseEntity) object).getId() != null && getId().equals(((BaseEntity) object).getId()));
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getLastEditingDate() {
        return lastEditingDate;
    }

    public void setLastEditingDate(Date lastEditingDate) {
        this.lastEditingDate = lastEditingDate;
    }
}
