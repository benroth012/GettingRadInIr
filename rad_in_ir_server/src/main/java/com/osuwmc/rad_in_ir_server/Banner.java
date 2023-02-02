package com.osuwmc.rad_in_ir_server;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Banner {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Integer id;

  private String heading;

  private String subheading;

  private String link;

  private String button_text;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getHeading() {
    return heading;
  }

  public void setHeading(String heading) {
    this.heading = heading;
  }

  public String getSubheading() {
    return subheading;
  }

  public void setSubheading(String subheading) {
    this.subheading = subheading;
  }

  public String getLink() {
    return link;
  }

  public void setLink(String link) {
    this.link = link;
  }

  public String getButton_text() {
    return button_text;
  }

  public void setButton_text(String button_text) {
    this.button_text = button_text;
  }

}