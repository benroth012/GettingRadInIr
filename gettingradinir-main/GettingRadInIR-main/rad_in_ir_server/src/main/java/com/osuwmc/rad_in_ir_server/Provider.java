package com.osuwmc.rad_in_ir_server;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Provider {
    
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Integer id;

  private String name;

  private String imagename;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getImageName() {
    return imagename;
  }

  public void setImageName(String imagename) {
    this.imagename = imagename;
  }
}
