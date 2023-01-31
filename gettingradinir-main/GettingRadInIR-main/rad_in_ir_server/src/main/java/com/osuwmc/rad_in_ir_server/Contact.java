package com.osuwmc.rad_in_ir_server;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Contact {
  
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Integer id;

  private String firstLine;

  private String secondLine;

  private String number;

  private String imagename;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getFirstLine() {
    return firstLine;
  }

  public void setFirstLine(String firstLine) {
    this.firstLine = firstLine;
  }

  public String getSecondLine() {
    return secondLine;
  }

  public void setSecondLine(String secondLine) {
    this.secondLine = secondLine;
  }

  public String getNumber() {
    return number;
  }

  public void setNumber(String number) {
    this.number = number;
  }

  public String getImageName() {
    return imagename;
  }

  public void setImageName(String imagename) {
    this.imagename = imagename;
  }
}
