package com.osuwmc.rad_in_ir_server;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class MainControllerTests {
  @Autowired
  private MainController controller;

  @Test
  public void contextLoads() throws Exception {
		assertThat(controller).isNotNull();
  }
  
  @Test
  public void testAddVideo() throws Exception {
    Video video = new Video();
    video.setName("What is IR");
    video.setLink("https://www.youtube.com/watch?v=WDjXyzQZTjo");

    assertThat(controller.addNewVideo(video).equals("Saved")).isTrue();
  }

  @Test
  public void testAddVideo2() throws Exception {
    Video video = new Video();
    video.setName("Test Video 2");
    video.setLink("https://www.youtube.com/watch?v=0_SY3iMFVr4");

    assertThat(controller.addNewVideo(video).equals("Saved")).isTrue();
  }

  @Test
  public void testDeleteVideo() throws Exception {
    Video video = new Video();
    video.setName("What is IR");
    video.setLink("https://www.youtube.com/watch?v=WDjXyzQZTjo");

    controller.addNewVideo(video);

    assertThat(controller.deleteVideo(video.getId()).equals("Deleted")).isTrue();
  }

  @Test
  public void testDeleteVideo2() throws Exception {
    Video video = new Video();
    video.setName("Test Video 2");
    video.setLink("https://www.youtube.com/watch?v=0_SY3iMFVr4");

    controller.addNewVideo(video);

    assertThat(controller.deleteVideo(video.getId()).equals("Deleted")).isTrue();
  }

  @Test
  public void testGetAllVideos() throws Exception {
    Iterable<Video> v = controller.getAllVideos();

    assertThat(v).isNotEmpty();
  }

  @Test
  public void testAddNewPhysician() throws Exception {
    Physician phys = new Physician();
    phys.setName("Test Doctor");
    phys.setLink("https://wexnermedical.osu.edu/about-us/our-people#:~:text=Dr.,Ohio%20State%20Wexner%20Medical%20Center.");
    
    assertThat(controller.addNewPhysician(phys).equals("Saved")).isTrue();
  }

  @Test
  public void testAddNewPhysician2() throws Exception {
    Physician phys = new Physician();
    phys.setName("Test Doctor 2");
    phys.setLink("https://cancer.osu.edu/find-a-doctor/search-physician-directory/laith-abushahin");
    
    assertThat(controller.addNewPhysician(phys).equals("Saved")).isTrue();
  }

  @Test
  public void testDeletePhysician() throws Exception {
    Physician phys = new Physician();
    phys.setName("Test Doctor");
    phys.setLink("https://wexnermedical.osu.edu/about-us/our-people#:~:text=Dr.,Ohio%20State%20Wexner%20Medical%20Center.");
    
    controller.addNewPhysician(phys);

    assertThat(controller.deletePhysician(phys.getId()).equals("Deleted")).isTrue();
  }

  @Test
  public void testDeletePhysician2() throws Exception {
    Physician phys = new Physician();
    phys.setName("Test Doctor 2");
    phys.setLink("https://cancer.osu.edu/find-a-doctor/search-physician-directory/laith-abushahin");
    
    controller.addNewPhysician(phys);

    assertThat(controller.deletePhysician(phys.getId()).equals("Deleted")).isTrue();
  }

  @Test
  public void testGetAllPhysicians() throws Exception {
    Iterable<Physician> phys = controller.getAllPhysicians();

    assertThat(phys).isNotEmpty();
  }

  @Test
  public void testAddNewProvider() throws Exception {
    Provider p = new Provider();
    p.setName("Test Provider");

    assertThat(controller.addNewProvider(p).equals("Saved")).isTrue();
  }

  @Test
  public void testAddNewProvider2() throws Exception {
    Provider p = new Provider();
    p.setName("Test Provider 2");

    assertThat(controller.addNewProvider(p).equals("Saved")).isTrue();
  }

  @Test
  public void testDeleteProvider() throws Exception {
    Provider p = new Provider();
    p.setName("Test Provider");

    controller.addNewProvider(p);

    assertThat(controller.deleteProvider(p.getId()).equals("Deleted")).isTrue();
  }

  @Test
  public void testDeleteProvider2() throws Exception {
    Provider p = new Provider();
    p.setName("Test Provider 2");

    controller.addNewProvider(p);

    assertThat(controller.deleteProvider(p.getId()).equals("Deleted")).isTrue();
  }

  @Test
  public void testGetAllProviders() throws Exception {
    Iterable<Provider> p = controller.getAllProviders();

    assertThat(p).isNotEmpty();
  }

  @Test
  public void testAddNewContact() throws Exception {
    Contact c = new Contact();
    c.setFirstLine("This is a test first line");
    c.setSecondLine("This is a test second line");
    c.setNumber("555-555-5555");

    assertThat(controller.addNewContact(c).equals("Saved")).isTrue();
  }

  @Test
  public void testAddNewContact2() throws Exception {
    Contact c = new Contact();
    c.setFirstLine("TEST 1");
    c.setSecondLine("TEST 2");
    c.setNumber("123-456-7890");

    assertThat(controller.addNewContact(c).equals("Saved")).isTrue();
  }

  @Test
  public void testDeleteContact() throws Exception {
    Contact c = new Contact();
    c.setFirstLine("This is a test first line");
    c.setSecondLine("This is a test second line");
    c.setNumber("555-555-5555");

    controller.addNewContact(c);

    assertThat(controller.deleteContact(c.getId()).equals("Deleted")).isTrue();
  }

  @Test
  public void testDeleteContact2() throws Exception {
    Contact c = new Contact();
    c.setFirstLine("TEST 1");
    c.setSecondLine("TEST 2");
    c.setNumber("123-456-7890");

    controller.addNewContact(c);

    assertThat(controller.deleteContact(c.getId()).equals("Deleted")).isTrue();
  }

  @Test
  public void testGetAllContacts() throws Exception {
    Iterable<Contact> c = controller.getAllContacts();

    assertThat(c).isNotEmpty();
  }

  /*
  @Test
  public void testAddEducation() throws Exception {
    Education ed = new Education();
    ed.setName("Test Education");
    ed.setLinks(new String[]{"test_pdf.pdf", "test_pdf.pdf"});
    ed.setIcon("test_icon.jpg");
    
    assertThat(controller.addNewEducation(ed).equals("Saved")).isTrue();
  }

  @Test
  public void testAddEducation2() throws Exception {
    Education ed = new Education();
    ed.setName("Test Education 2");
    ed.setLinks(new String[]{"test_pdf2.pdf", "test_pdf2.pdf"});
    ed.setIcon("test_icon2.svg");
    
    assertThat(controller.addNewEducation(ed).equals("Saved")).isTrue();
  }

  @Test
  public void testDeleteEducation() throws Exception {
    Education ed = new Education();
    ed.setName("Test Education");
    ed.setLinks(new String[]{"test_pdf.pdf", "test_pdf.pdf"});
    ed.setIcon("test_icon.jpg");

    controller.addNewEducation(ed);

    assertThat(controller.deleteEducation(ed.getId()).equals("Deleted")).isTrue();
  }

  @Test
  public void testDeleteEducation2() throws Exception {
    Education ed = new Education();
    ed.setName("Test Education 2");
    ed.setLinks(new String[]{"test_pdf2.pdf", "test_pdf2.pdf"});
    ed.setIcon("test_icon2.svg");

    controller.addNewEducation(ed);

    assertThat(controller.deleteEducation(ed.getId()).equals("Deleted")).isTrue();
  }

  @Test
  public void testGetAllEducation() throws Exception {
    Iterable<Education> ed = controller.getAllEducation();

    assertThat(ed).isNotEmpty();
  }
  */

  @Test
  public void testAddCard() throws Exception {
    assertThat(controller.addNewCard("image.jpg", "Test Title", "Test Description", "Test Button Text", "/testlink", "=testadminkey").equals("Saved")).isTrue();
  }

  @Test
  public void testAddCard2() throws Exception {
    assertThat(controller.addNewCard("image2.jpg", "Test New Title", "Test New Description", "Test New Button Text", "/testlink2", "=testanotheradminkey").equals("Saved")).isTrue();
  }

  @Test
  public void testGetAllCards() throws Exception {
    Iterable<Card> c = controller.getAllCards();

    assertThat(c).isNotEmpty();
  }

  @Test
  public void testAddBanner() throws Exception {
    assertThat(controller.addNewBanner("Test Heading", "Test Subheading", "/testlink", "Test Button Text").equals("Saved")).isTrue();
  }

  @Test
  public void testAddBanner2() throws Exception {
    assertThat(controller.addNewBanner("Test New Heading", "Test New Subheading", "/testanotherlink", "Test New Button Text").equals("Saved")).isTrue();
  }

  @Test
  public void testGetAllBanners() throws Exception {
    Iterable<Banner> b = controller.getAllBanners();

    assertThat(b).isNotNull();
  }

}