package models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Item {

	@Id
	public Integer id;
	
	public String name;
	
}
