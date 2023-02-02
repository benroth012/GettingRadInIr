package com.osuwmc.rad_in_ir_server;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Card {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String image_name;

  private String title;

  private String description;

  private String button_text;

  private String link;

  private String admin_key;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getImage_name() {
    return image_name;
  }

  public void setImage_name(String image_name) {
    this.image_name = image_name;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getButton_text() {
    return button_text;
  }

  public void setButton_text(String button_text) {
    this.button_text = button_text;
  }

  public String getLink() {
    return link;
  }

  public void setLink(String link) {
    this.link = link;
  }

  public String getAdminKey() {
    return admin_key;
  }

  public void setAdminKey(String admin_key) {
    this.admin_key = admin_key;
  }

}