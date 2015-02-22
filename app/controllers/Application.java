package controllers;

import java.util.List;

import models.Item;

import com.avaje.ebean.*;

import play.mvc.*;
import views.html.*;

public class Application extends Controller {

    public static Result index() {
    	List<Item> items = Ebean.find(Item.class).findList();
        return ok(index.render(items));
    }
    
    public static Result createItem(String name){
    	Item item = new Item();
    	item.name = name;
    	Ebean.save(item);
    	return ok();
    }
    
    public static Result deleteItem(Integer id){
    	Item item = Ebean.find(Item.class, id);
    	Ebean.delete(item);
    	return ok();
    }

    public static Result jsRoutes() {
		response().setContentType("text/javascript");
		return ok(play.Routes.javascriptRouter("jsRoutes",
				controllers.routes.javascript.Application.createItem(),
				controllers.routes.javascript.Application.deleteItem()
				));
	}
}
