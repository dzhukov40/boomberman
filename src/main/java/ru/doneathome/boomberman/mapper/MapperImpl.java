package ru.doneathome.boomberman.mapper;

import org.dozer.DozerBeanMapperSingletonWrapper;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 *
 */
@Component
@Scope(value = ConfigurableBeanFactory.SCOPE_SINGLETON)
public class MapperImpl implements Mapper {

    private org.dozer.Mapper mapper = DozerBeanMapperSingletonWrapper.getInstance();

    @Override
    public <A, B> B map(A src, Class<B> clazz) {
        if (src != null) {
            return mapper.map(src, clazz);
        }
        return null;
    }

    @Override
    public <A, B> void map(A src, B target) {
        if (src != null) {
            mapper.map(src, target);
        }
    }

    @Override
    public <A, B> void map(A src, B target, String mapId) {
        if (src != null) {
            mapper.map(src, target, mapId);
        }
    }

    @Override
    public <A, B> List<B> mapCollections(Collection<A> src, Class<B> clazz) {
        if (src == null || src.size() == 0) {
            return new ArrayList<B>(0);
        }
        List<B> dst = new ArrayList<B>();
        for (A a : src) {
            if (a != null) {
                dst.add(mapper.map(a, clazz));
            }
        }
        return dst;
    }
}
