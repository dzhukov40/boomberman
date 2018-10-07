package ru.doneathome.boomberman.model;

import ru.doneathome.boomberman.DAO.DaoApi.IdHolder;

import java.io.Serializable;

public abstract class BaseEntity implements IdHolder, Serializable {

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        BaseEntity that = (BaseEntity) o;

        if (getId() == null || !getId().equals(that.getId())) {
            return false;
        }

        return true;
    }

    @Override
    public int hashCode() {
        return getId() != null ? getId().hashCode() : super.hashCode();
    }

}
