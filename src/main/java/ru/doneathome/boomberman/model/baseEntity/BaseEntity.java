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

    public static final String P_GUID = "guid";
    public static final String P_LAST_EDITING_DATE = "last_editing_date";

    @Id
    @Column(name = P_GUID, nullable = false)
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    protected String guid;

    @Column(name = P_LAST_EDITING_DATE, nullable = false)
    protected Date lastEditingDate;

    @PrePersist
    @PreUpdate
    final void updateLastEditingDate() {
        setLastEditingDate(new Date());
    }

    protected void assignGuidIfEmpty() {
        if (this.guid == null) {
            this.guid = UUID.randomUUID().toString();
        }
    }

    @Override
    public int hashCode() {
        return getGuid() != null ? getGuid().hashCode() : 0;
    }

    @Override
    public boolean equals(Object object) {
        if (this == object)
            return true;
        if (!(object instanceof BaseEntity)) {
            return false;
        }
        return (getGuid() != null && ((BaseEntity) object).getGuid() != null && getGuid().equals(((BaseEntity) object).getGuid()));
    }

    public String getGuid() {
        return guid;
    }

    public void setGuid(String guid) {
        this.guid = guid;
    }

    public Date getLastEditingDate() {
        return lastEditingDate;
    }

    public void setLastEditingDate(Date lastEditingDate) {
        this.lastEditingDate = lastEditingDate;
    }
}
